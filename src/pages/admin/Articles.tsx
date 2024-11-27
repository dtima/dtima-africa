import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Articles = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Articles Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Articles management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Articles;