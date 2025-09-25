import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SmartphoneIcon, 
  QrCodeIcon, 
  MenuIcon, 
  CheckCircleIcon, 
  CreditCardIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon
} from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Customer Scans QR Code",
      description: "Diner scans the QR code at their table",
      icon: QrCodeIcon,
      content: (
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center relative">
            <div className="w-24 h-24 border-2 border-white border-dashed rounded-lg flex items-center justify-center">
              <QrCodeIcon className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            QR code detected!<br />
            Opening menu...
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: "Browse Digital Menu",
      description: "Beautiful menu with photos and descriptions",
      icon: MenuIcon,
      content: (
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
            <h3 className="font-bold text-lg text-center">Ethiopian Restaurant</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                <div className="w-12 h-12 bg-orange-200 rounded"></div>
                <div className="flex-1">
                  <div className="font-medium">Doro Wat</div>
                  <div className="text-sm text-gray-600">Spicy chicken stew</div>
                  <div className="text-sm font-bold text-green-600">$12.99</div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Add
                </Button>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                <div className="w-12 h-12 bg-yellow-200 rounded"></div>
                <div className="flex-1">
                  <div className="font-medium">Injera</div>
                  <div className="text-sm text-gray-600">Traditional bread</div>
                  <div className="text-sm font-bold text-green-600">$3.99</div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Add
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="font-bold">Total: $16.98</span>
              <Button className="bg-green-600 hover:bg-green-700">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Order Sent to Kitchen",
      description: "Kitchen receives order instantly",
      icon: CheckCircleIcon,
      content: (
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="w-12 h-12 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg text-green-600">Order Confirmed!</h3>
            <p className="text-sm text-muted-foreground">
              Order #1234 sent to kitchen<br />
              Estimated time: 15-20 minutes
            </p>
          </div>
          <div className="w-full max-w-xs bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Pay After Service",
      description: "Secure payment after enjoying your meal",
      icon: CreditCardIcon,
      content: (
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="font-bold text-lg text-center">Payment</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Doro Wat</span>
                <span>$12.99</span>
              </div>
              <div className="flex justify-between">
                <span>Injera</span>
                <span>$3.99</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>$16.98</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Pay with Card
              </Button>
              <Button variant="outline" className="w-full">
                Pay with Mobile Money
              </Button>
            </div>
            <div className="text-center text-sm text-green-600 font-medium">
              ✓ Payment Successful!
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(prev => (prev + 1) % steps.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setProgress(0);
    setIsPlaying(false);
  };

  const currentStepData = steps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            How Dine Dash Works
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Current Step Content */}
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <currentStepData.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{currentStepData.title}</h3>
                  <p className="text-muted-foreground">{currentStepData.description}</p>
                </div>
                <div className="mt-6">
                  {currentStepData.content}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handlePlayPause}
              variant="outline"
              className="flex items-center space-x-2"
            >
              {isPlaying ? (
                <>
                  <PauseIcon className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <PlayIcon className="w-4 h-4" />
                  <span>Play Demo</span>
                </>
              )}
            </Button>
            <Button
              onClick={() => setCurrentStep(prev => (prev - 1 + steps.length) % steps.length)}
              variant="outline"
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(prev => (prev + 1) % steps.length)}
              variant="outline"
            >
              Next
            </Button>
          </div>

          {/* Step List */}
          <div className="space-y-2">
            <h4 className="font-semibold">All Steps:</h4>
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  index === currentStep
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
