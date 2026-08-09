import { PortfolioData } from '../types';
import { initialPortfolioData } from '../data/initialData';

const STORAGE_KEY = 'va_portfolio_custom_data_v8';

export function getStoredPortfolioData(): PortfolioData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialPortfolioData;
    const parsed = JSON.parse(raw);
    return {
      ...initialPortfolioData,
      ...parsed,
      profile: {
        ...initialPortfolioData.profile,
        ...(parsed.profile || {})
      }
    };
  } catch (e) {
    console.error('Failed to parse portfolio data from storage:', e);
    return initialPortfolioData;
  }
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save portfolio data to storage:', e);
  }
}

export function resetPortfolioData(): PortfolioData {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset portfolio data:', e);
  }
  return initialPortfolioData;
}
