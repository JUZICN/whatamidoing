import { formatInTimeZone } from 'date-fns-tz';
import { differenceInMinutes, differenceInHours } from 'date-fns';

export const formatDateTime = (date: Date): string => {
  return formatInTimeZone(date, 'Asia/Shanghai', "yyyy-MM-dd HH:mm:ss");
};

export const calculateDuration = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  const hours = differenceInHours(now, start);
  const minutes = differenceInMinutes(now, start) % 60;
  
  if (hours > 0) {
    return `${hours}小时${minutes}分钟`;
  }
  return `${minutes}分钟`;
};