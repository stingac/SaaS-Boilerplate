import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default async function BillingPage() {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    redirect('/dashboard');
  }
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Billing</h2>
      </div>
      <div className="grid gap-4">
        <Alert>
          {/* <Icons.warning className="size-4" /> */}
          <AlertTitle>Test Mode Active</AlertTitle>
          <AlertDescription>
            This is running in test mode. You can use
            {' '}
            <a
              href="https://stripe.com/docs/testing#cards"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              test cards
            </a>
            {' '}
            to simulate a subscription.
          </AlertDescription>
        </Alert>
        {/* <BillingInfo userSubscriptionPlan={organizationSubscriptionPlan} /> */}
      </div>
    </div>
  );
};
