import React from "react";
import styles from "./FileAction.module.scss"
import { Button, Popconfirm } from "antd";

interface FileActionsProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}

export const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Поширити
      </Button>

      <Popconfirm
        title="Видалити файл(и)?"
        description="Всі файли будуть переміщені до кошика"
        okText="Так"
        cancelText="Ні"
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type="primary" danger>
          Видалити
        </Button>
      </Popconfirm>
    </div>
  );
};