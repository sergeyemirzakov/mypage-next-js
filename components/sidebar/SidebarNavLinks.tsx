import Link from 'next/link';

const SIDEBAR_NAV_LINKS: string[] = [
  'Help',
  'Status',
  'Writers',
  'Blog',
  'Careers',
  'Privacy',
  'Terms',
  'About',
  'Knowable',
];

const SidebarNavLinks = () => {
  return (
    <div className="hidden md:flex flex-wrap pt-7 border-t border-slate-300">
      {SIDEBAR_NAV_LINKS.map((item, idx) => (
        <Link key={idx} href="/">
          <a className="text-slate-500 mr-8 mb-4 text-xs">{item}</a>
        </Link>
      ))}
    </div>
  );
};

export default SidebarNavLinks;
