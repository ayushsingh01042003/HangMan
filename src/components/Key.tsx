interface keyProp {
  letter: String
}

const Key = ({ letter }: keyProp) => {
  return (
    <div className="border-2 border-black m-1 text-center py-3 hover:bg-blue-300">
      { letter }
    </div>
  )
}

export default Key