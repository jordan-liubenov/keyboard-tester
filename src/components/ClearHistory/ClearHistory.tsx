interface ClearHistoryProps {
  handleClearHistory: (toggle: boolean) => void
}

const ClearHistory = (props: ClearHistoryProps) => {
  return <button onClick={() => props?.handleClearHistory(true)}>Clear</button>
}

export default ClearHistory
