import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { formatInTimeZone } from 'date-fns-tz';

interface StatusState {
  status: string;
  updatedAt: string | null;
  updateStatus: (newStatus: string) => void;
}

export const useStatusStore = create<StatusState>()(
  persist(
    (set) => ({
      status: '正在思考人生...',
      updatedAt: null,
      updateStatus: (newStatus: string) => {
        const now = new Date();
        set({
          status: newStatus,
          updatedAt: formatInTimeZone(now, 'Asia/Shanghai', 'yyyy-MM-dd HH:mm:ss')
        });
      }
    }),
    {
      name: 'status-storage'
    }
  )
);