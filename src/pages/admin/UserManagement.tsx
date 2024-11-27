import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const UserManagement = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p>User management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;