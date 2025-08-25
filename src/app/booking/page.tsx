"use client";

import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { services } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const availableTimeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedService || !selectedTime) {
      toast({
        title: "Incomplete Information",
        description: "Please select a service, date, and time.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your appointment for ${services.find(s=>s.id.toString() === selectedService)?.name} on ${format(date, 'PPP')} at ${selectedTime} is confirmed.`,
    });
    
    setDate(new Date());
    setSelectedService(undefined);
    setSelectedTime(undefined);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline text-primary">
          Book a Service
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
          Schedule your appointment with our expert technicians in just a few clicks.
        </p>
      </header>
      
      <Card className="max-w-4xl mx-auto border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
          <CardDescription>Follow the steps below to book your service.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-2 block">Step 1: Select a Service</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger><SelectValue placeholder="Choose a service..." /></SelectTrigger>
                <SelectContent>
                  {services.map(service => (
                    <SelectItem key={service.id} value={service.id.toString()}>{service.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
                <Label className="text-lg font-semibold">Step 2: Pick a Date</Label>
                <div className="flex justify-center rounded-md border border-border/50">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(day) => day < new Date(new Date().setDate(new Date().getDate() - 1)) || day.getDay() === 0}
                        className="p-0"
                    />
                </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">Step 3: Choose a Time Slot</Label>
              {date ? (
                <RadioGroup
                  value={selectedTime}
                  onValueChange={setSelectedTime}
                  className="grid grid-cols-2 gap-4"
                >
                  {availableTimeSlots.map(time => (
                    <div key={time}>
                      <RadioGroupItem value={time} id={time} className="peer sr-only" />
                      <Label htmlFor={time} className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 font-semibold hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                        {time}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <p className="text-neutral-400">Please select a date first.</p>
              )}
            </div>
            <Button onClick={handleBooking} size="lg" className="w-full text-lg font-bold">
              Confirm Booking
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
