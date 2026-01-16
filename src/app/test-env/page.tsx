export default function TestEnvPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Test</h1>
      <div className="space-y-2">
        <p>NOTION_API_KEY: {process.env.NOTION_API_KEY ? '✅ Set' : '❌ Not set'}</p>
        <p>NOTION_LIVE_LEGAL_DB_ID: {process.env.NOTION_LIVE_LEGAL_DB_ID ? '✅ Set' : '❌ Not set'}</p>
        <p>NOTION_UNSAID_DB_ID: {process.env.NOTION_UNSAID_DB_ID ? '✅ Set' : '❌ Not set'}</p>
      </div>
    </div>
  )
}

