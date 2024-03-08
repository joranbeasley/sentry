import type {MRI} from 'sentry/types/metrics';
import type {MetricQueryType} from 'sentry/utils/metrics/types';

export type Order = 'asc' | 'desc' | undefined;

export interface DashboardMetricsQuery {
  id: number;
  mri: MRI;
  op: string;
  orderBy: Order;
  type: MetricQueryType.QUERY;
  groupBy?: string[];
  isQueryOnly?: boolean;
  limit?: number;
  query?: string;
}

export interface DashboardMetricsEquation {
  formula: string;
  id: number;
  type: MetricQueryType.FORMULA;
}

export type DashboardMetricsExpression = DashboardMetricsQuery | DashboardMetricsEquation;