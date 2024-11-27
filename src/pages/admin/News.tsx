import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const News = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">News Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>News</CardTitle>
        </CardHeader>
        <CardContent>
          <p>News management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default News;