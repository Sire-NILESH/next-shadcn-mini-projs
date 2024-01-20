import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import React from "react";
import { UserNav } from "./_components/user-nav";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { getTasks } from "./_lib/actions";

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <div className="container !p-0">
      <PageHeader>
        <PageHeaderHeading>Tasks Table</PageHeaderHeading>
        <PageHeaderDescription>
          A mini project to showcase a comprehensive and feature-rich shadcn
          data tables with static tasks data
        </PageHeaderDescription>
      </PageHeader>

      <section className="">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <div className="h-full flex flex-1 flex-col space-y-8 p-4 md:p-8">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your tasks for this month!
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <UserNav />
              </div>
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TasksPage;
