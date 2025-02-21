import { useState } from 'react';
import { Mail, Users, Send, BarChart3, FileText, Settings, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from '@/lib/supabase'

interface EmailData {
  subject: string;
  content: string;
  recipients: string[];
}

const Dashboard = () => {
  const [activeView, setActiveView] = useState<string>('compose');
  const [emailData, setEmailData] = useState<EmailData>({
    subject: '',
    content: '',
    recipients: [],
  });
  const { toast } = useToast();

  const handleSendEmail = async () => {
    toast({
      title: "Emails Scheduled",
      description: `Sending to ${emailData.recipients.length} recipients`,
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const NavButton = ({ 
    icon: Icon, 
    label, 
    view 
  }: { 
    icon: any; 
    label: string; 
    view: string;
  }) => (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2",
        activeView === view && "bg-accent/10 text-accent"
      )}
      onClick={() => setActiveView(view)}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 px-2">
          <Mail className="w-6 h-6 text-accent" />
          <span className="text-lg font-semibold">MailSync Pro</span>
        </div>
        
        <div className="space-y-1">
          <NavButton icon={Send} label="Compose" view="compose" />
          <NavButton icon={Users} label="Contacts" view="contacts" />
          <NavButton icon={FileText} label="Templates" view="templates" />
          <NavButton icon={BarChart3} label="Analytics" view="analytics" />
          <NavButton icon={Settings} label="Settings" view="settings" />
        </div>
        <div className="mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeView === 'compose' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-semibold">Compose Email</h1>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Recipients</label>
                <Input 
                  placeholder="Enter email addresses (comma-separated)"
                  onChange={(e) => setEmailData({
                    ...emailData,
                    recipients: e.target.value.split(',').map(email => email.trim())
                  })}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Subject</label>
                <Input 
                  placeholder="Email subject"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({
                    ...emailData,
                    subject: e.target.value
                  })}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Content</label>
                <Textarea 
                  placeholder="Write your email content..."
                  className="min-h-[300px] resize-none"
                  value={emailData.content}
                  onChange={(e) => setEmailData({
                    ...emailData,
                    content: e.target.value
                  })}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button onClick={handleSendEmail}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 