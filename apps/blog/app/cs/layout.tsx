import { BreadCrumb } from "@/components/breadcrumb";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-[minmax(0.875rem,_1fr)_minmax(auto,_708px)_minmax(0.875rem,_1fr)] sm:grid-cols-[minmax(96px,_3fr)_minmax(auto,_708px)_minmax(96px,_1fr)] pt-6 pb-[10vh] sm:pt-[80px] sm:pb-[20vh] w-full transition-all">
      <aside className="hidden lg:block sticky top-[80px] left-3 border-y-2 w-[180px] h-fit">
        <dl className="border-b-[1px] border-muted px-[7px]">
          <dd className="py-[6px]">
            <BreadCrumb />
          </dd>
        </dl>
        <dl className="flex gap-4 text-xs px-[7px] py-[9px]">
          <dt className="text-muted-foreground">작성일</dt>
          <dd>3일 전</dd>
        </dl>
      </aside>
      <article className="col-start-2">
        <BreadCrumb className="lg:hidden text-muted-foreground mb-1" />
        {children}
      </article>
    </section>
  );
}
