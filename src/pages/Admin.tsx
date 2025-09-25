import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MailIcon, PhoneIcon, MapPinIcon, CalendarIcon, RefreshCwIcon, ArrowLeftIcon, LogOutIcon } from "lucide-react";
import AuthForm from "@/components/AuthForm";
import { authService } from "@/lib/auth";

interface Registration {
  id: string;
  restaurant_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  location?: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('restaurant_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast({
        title: "Error loading registrations",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('restaurant_registrations')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setRegistrations(prev => 
        prev.map(reg => 
          reg.id === id ? { ...reg, status: newStatus } : reg
        )
      );

      toast({
        title: "Status updated",
        description: `Registration marked as ${newStatus}`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error updating status",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    // Check if user is already authenticated
    if (authService.isAuthenticated()) {
      setIsAuthenticated(true);
      fetchRegistrations();
    } else {
      setLoading(false);
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    authService.setAuthenticated(true);
    fetchRegistrations();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    authService.logout();
    setRegistrations([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Show authentication form if not authenticated
  if (!isAuthenticated) {
    return <AuthForm onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage restaurant registrations</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={fetchRegistrations} 
              variant="outline" 
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCwIcon className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button 
              onClick={handleLogout} 
              variant="destructive" 
              size="sm"
              className="flex items-center gap-2"
            >
              <LogOutIcon className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">
                  {registrations.length}
                </div>
                <p className="text-sm text-muted-foreground">Total Registrations</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-yellow-600">
                  {registrations.filter(r => r.status === 'pending').length}
                </div>
                <p className="text-sm text-muted-foreground">Pending</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">
                  {registrations.filter(r => r.status === 'contacted').length}
                </div>
                <p className="text-sm text-muted-foreground">Contacted</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">
                  {registrations.filter(r => r.status === 'completed').length}
                </div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <RefreshCwIcon className="w-8 h-8 animate-spin mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Loading registrations...</p>
          </div>
        ) : registrations.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground text-lg">No registrations yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {registrations.map((registration) => (
              <Card key={registration.id} className="shadow-elegant bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{registration.restaurant_name}</CardTitle>
                    <Badge className={getStatusColor(registration.status)}>
                      {registration.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Contact:</span>
                        <span>{registration.contact_name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MailIcon className="w-4 h-4 text-muted-foreground" />
                        <a 
                          href={`mailto:${registration.email}`}
                          className="text-primary hover:underline"
                        >
                          {registration.email}
                        </a>
                      </div>
                      {registration.phone && (
                        <div className="flex items-center gap-3">
                          <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                          <a 
                            href={`tel:${registration.phone}`}
                            className="text-primary hover:underline"
                          >
                            {registration.phone}
                          </a>
                        </div>
                      )}
                      {registration.location && (
                        <div className="flex items-center gap-3">
                          <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                          <span>{registration.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                        <span>{new Date(registration.created_at).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {registration.status === 'pending' && (
                          <Button 
                            size="sm" 
                            onClick={() => updateStatus(registration.id, 'contacted')}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Mark as Contacted
                          </Button>
                        )}
                        {registration.status === 'contacted' && (
                          <Button 
                            size="sm" 
                            onClick={() => updateStatus(registration.id, 'completed')}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Mark as Completed
                          </Button>
                        )}
                        {(registration.status === 'pending' || registration.status === 'contacted') && (
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => updateStatus(registration.id, 'cancelled')}
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;