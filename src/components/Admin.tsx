import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ChefHatIcon, MailIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react";

interface Registration {
  id: string;
  restaurant_name: string;
  contact_name: string;
  email: string;
  phone: string | null;
  location: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('restaurant_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast({
        title: "Error",
        description: "Failed to load registrations",
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
        title: "Status Updated",
        description: `Registration marked as ${newStatus}`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-xl">Loading registrations...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            dine-dash Admin
          </h1>
          <p className="text-xl text-muted-foreground">
            Restaurant Registration Management
          </p>
        </div>

        <div className="grid gap-6">
          {registrations.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">No registrations yet</h3>
                <p className="text-muted-foreground">
                  Registrations will appear here when restaurants sign up.
                </p>
              </CardContent>
            </Card>
          ) : (
            registrations.map((registration) => (
              <Card key={registration.id} className="shadow-elegant bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <ChefHatIcon className="w-5 h-5" />
                        {registration.restaurant_name}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        Contact: {registration.contact_name}
                      </CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(registration.status)} capitalize`}>
                      {registration.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MailIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{registration.email}</span>
                    </div>
                    
                    {registration.phone && (
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{registration.phone}</span>
                      </div>
                    )}
                    
                    {registration.location && (
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{registration.location}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        {new Date(registration.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {registration.status === 'pending' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateStatus(registration.id, 'contacted')}
                      >
                        Mark as Contacted
                      </Button>
                    )}
                    {registration.status === 'contacted' && (
                      <Button 
                        size="sm" 
                        variant="hero"
                        onClick={() => updateStatus(registration.id, 'completed')}
                      >
                        Mark as Completed
                      </Button>
                    )}
                    {registration.status === 'completed' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateStatus(registration.id, 'pending')}
                      >
                        Reset to Pending
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;