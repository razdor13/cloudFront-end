'use client'

import React from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Використовуйте з нового App Router
import styles from '@/app/Home.module.scss';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { UploadButton } from '../UploadButton';
import { FileList } from '../FileList';
import { FileItem } from '@/api/dto/files.dto'; // Упевніться, що FileItem визначено відповідним чином
import { FileActions } from '../FileAction';

interface DashboardProps {
  items: FileItem[];
}

const Dashboard: React.FC<DashboardProps> = ({ items }) => {
  const router = useRouter();
  const pathname = usePathname() || ''
  console.log(pathname)
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
              label: `Файлы`,
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
        <FileList items={items}/>
      </div>
    </main>
  );
};

export default Dashboard;