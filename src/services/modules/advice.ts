import type { AxiosRequestConfig } from 'axios'

import BaseService from './base'
import type { IAdvice } from '@/interfaces/modules/advices'

class AdviceService extends BaseService {
  static async getAdviceslip(config?: AxiosRequestConfig): Promise<IAdvice> {
    return this._get<IAdvice>('/api/proxy-advice', {
      baseURL: '',
      ...config,
    })
  }
}

export default AdviceService
