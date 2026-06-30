"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  CheckCircle2,
  TrendingUp,
  Users,
  Activity,
} from "lucide-react";
import { StatCard } from "../../../components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const mockBarData = [
  { name: 'Mon', completed: 40, pending: 24 },
  { name: 'Tue', completed: 30, pending: 13 },
  { name: 'Wed', completed: 20, pending: 48 },
  { name: 'Thu', completed: 27, pending: 39 },
  { name: 'Fri', completed: 18, pending: 48 },
  { name: 'Sat', completed: 23, pending: 38 },
  { name: 'Sun', completed: 34, pending: 43 },
];

const mockLineData = [
  { name: 'Week 1', avgScore: 65 },
  { name: 'Week 2', avgScore: 72 },
  { name: 'Week 3', avgScore: 68 },
  { name: 'Week 4', avgScore: 75 },
];

const recentActivity = [
  { id: 1, text: "Dr. Smith evaluated 15 papers for CS101", time: "2 hours ago" },
  { id: 2, text: "System auto-saved draft for Roll #40291", time: "3 hours ago" },
  { id: 3, text: "New batch of 200 answer sheets uploaded", time: "5 hours ago" },
  { id: 4, text: "Prof. Johnson completed marking PHY201", time: "1 day ago" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-text-primary">Dashboard</h1>
        <p className="text-brand-text-secondary">Overview of the evaluation progress and statistics.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <StatCard
            title="Total Exams"
            value="1,248"
            icon={FileText}
            trend={{ value: 12, isPositive: true }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <StatCard
            title="Pending Evaluation"
            value="342"
            icon={Clock}
            trend={{ value: 5, isPositive: false }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <StatCard
            title="Completed Papers"
            value="906"
            icon={CheckCircle2}
            trend={{ value: 18, isPositive: true }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <StatCard
            title="Active Examiners"
            value="45"
            icon={Users}
          />
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Evaluation Progress (This Week)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockBarData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                  <Tooltip
                    cursor={{ fill: '#F3F4F6' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="completed" fill="#2563EB" radius={[4, 4, 0, 0]} name="Completed" />
                  <Bar dataKey="pending" fill="#93C5FD" radius={[4, 4, 0, 0]} name="Pending" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Average Score Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockLineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} domain={['dataMin - 10', 'dataMax + 10']} />
                  <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Line type="monotone" dataKey="avgScore" stroke="#16A34A" strokeWidth={3} dot={{ r: 6, fill: '#16A34A' }} activeDot={{ r: 8 }} name="Avg Score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-bg">
                    <Activity className="h-5 w-5 text-brand-text-secondary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-brand-text-primary leading-none">
                      {activity.text}
                    </p>
                    <p className="text-sm text-brand-text-secondary">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
