import { Profile } from '@/components/Profile';
import { SendUI } from '@/components/SendUI';
import { Providers } from '@/Providers';
import Link from 'next/link';
import { Navbar } from '@/components/NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <main className={`[color-scheme:reader]`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 50,
          }}
        ></div>
        <div className="mx-auto max-w-4xl space-y-8">
          <article className="prose lg:prose-xl text-center mb-8 pb-5">
            <div className="font-Literata">
              <h1>Title</h1>
              <h3 className="lead">A story about...</h3>

              <h4>
                Author:{' '}
                <Link href="https://twitter.com/X"> x handle</Link>
              </h4>
            </div>
          </article>
          <Profile />
          <SendUI />
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-neutral-50 p-3.5 lg:p-6">
              <div className="space-y-9">
                <Navbar />
                <div className="flex justify-between">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </Providers>
  );
}
