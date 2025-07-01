'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from '@/lib/auth';

const Sidebar = () => {
  const pathname = usePathname();
  const role = localStorage.getItem('role');

  const navItems = {
    superadmin: [
      { name: 'Dashboard', href: '/dashboard/admin', icon: '🏠' },
      { name: 'Teachers', href: '/dashboard/admin/teachers', icon: '👨‍🏫' },
      { name: 'Students', href: '/dashboard/admin/students', icon: '👨‍🎓' },
    ],
    teacher: [
      { name: 'Dashboard', href: '/dashboard/teacher', icon: '🏠' },
      { name: 'Exams', href: '/dashboard/teacher/exams', icon: '📝' },
      { name: 'Students', href: '/dashboard/teacher/students', icon: '👨‍🎓' },
      { name: 'Results', href: '/dashboard/teacher/results', icon: '📊' },
    ],
    student: [
      { name: 'Dashboard', href: '/dashboard/student', icon: '🏠' },
      { name: 'Exams', href: '/dashboard/student/exams', icon: '📝' },
      { name: 'Results', href: '/dashboard/student/results', icon: '📊' },
    ],
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/auth/login';
  };

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Exam System</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems[role]?.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg ${pathname === item.href ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t absolute bottom-0 w-64">
        <button
          onClick={handleLogout}
          className="w-full flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <span className="mr-3">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;