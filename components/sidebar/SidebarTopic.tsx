import Link from 'next/link';

const SIDEBAR_NAV_TOPICS: string[] = [
  'Self',
  'Relationships',
  'Data Science',
  'Programming',
  'Productivity',
  'Javascript',
  'Machine Learning',
  'Politics',
  'Health',
];

const SidebarTopic = () => {
  return (
    <div className="flex md:flex flex-wrap pb-7">
      {SIDEBAR_NAV_TOPICS.map((item, idx) => (
        <Link key={idx} href="/">
          <a className="text-slate-500 border border-slate-200 py-2 px-4 mr-2 mb-2 text-xs">
            {item}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SidebarTopic;
