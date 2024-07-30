'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Використовуйте з нового App Router
import styles from '@/app/Home.module.scss';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { FileItem } from '@/api/dto/files.dto'; // Упевніться, що FileItem визначено відповідним чином
import { UploadButton } from '@/components/UploadButton';


interface DashboardProps {
  children: React.ReactNode; // Замість items, приймаємо дітей
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname() || '';

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <UploadButton />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[pathname]}
          items={[
            {
              key: `/dashboard`,
              icon: <FileOutlined />,
              label: `Файли`,
              onClick: () => router.push('/dashboard'),
            },
            {
              key: `/dashboard/photo`,
              icon: <FileImageOutlined />,
              label: `Фото`,
              onClick: () => router.push('/dashboard/photo'),
            },
            {
              key: `/dashboard/trash`,
              icon: <DeleteOutlined />,
              label: `Корзина`,
              onClick: () => router.push('/dashboard/trash'),
            },
          ]}
        />
      </div>

      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
