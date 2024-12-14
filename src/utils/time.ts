import { differenceInMinutes, differenceInHours, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

export const calculateDuration = (startDate: string): string => {
  if (!startDate) return '';
  
  try {
    const start = zonedTimeToUtc(parseISO(startDate), 'Asia/Shanghai');
    const now = new Date();
    const hours = differenceInHours(now, start);
    const minutes = differenceInMinutes(now, start) % 60;
    
    if (hours > 0) {
      return `${hours}小时${minutes}分钟`;
    }
    return `${minutes}分钟`;
  } catch (error) {
    console.error('Error calculating duration:', error);
    return '';
  }
};