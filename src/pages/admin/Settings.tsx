import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Site Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Settings interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;