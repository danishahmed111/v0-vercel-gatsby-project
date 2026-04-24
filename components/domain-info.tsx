'use client'

import { getAppMetadata, verifyOwnership, getCurrentDomainConfig } from '@/config/domain-config'

export function DomainInfo() {
  const ownership = verifyOwnership()
  const domainConfig = getCurrentDomainConfig()
  const metadata = getAppMetadata()

  return (
    <div className="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <div>
        <h3 className="font-semibold text-sm text-slate-700 mb-2">Ownership Information</h3>
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium">Owner:</span>{' '}
            <a
              href={`https://github.com/${ownership.owner}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {ownership.owner}
            </a>
          </p>
          <p>
            <span className="font-medium">Contact:</span>{' '}
            <a href={`mailto:${ownership.email}`} className="text-blue-600 hover:underline">
              {ownership.email}
            </a>
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-sm text-slate-700 mb-2">Domain Configuration</h3>
        <div className="space-y-1 text-sm font-mono bg-white p-2 rounded border border-slate-300">
          <p>
            <span className="text-slate-500">URL:</span> {domainConfig.url}
          </p>
          <p>
            <span className="text-slate-500">Protocol:</span> {domainConfig.protocol}
          </p>
          <p>
            <span className="text-slate-500">Domain:</span> {domainConfig.domain}
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-sm text-slate-700 mb-2">Application Details</h3>
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium">Name:</span> {metadata.name}
          </p>
          <p>
            <span className="font-medium">Version:</span> {metadata.version}
          </p>
          <p>
            <span className="font-medium">Repository:</span>{' '}
            <a
              href={metadata.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {metadata.repository}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
