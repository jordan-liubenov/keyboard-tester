interface ClearHistoryProps {
  handleClearHistory: (toggle: boolean) => void
}

const ClearHistory = (props: ClearHistoryProps) => {
  return <button onClick={() => props?.handleClearHistory(true)}>Clear input history</button>
}

export default ClearHistory
