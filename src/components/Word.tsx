interface WordProp {
  character: string
}

const Word = ({ character }: WordProp) => {
  return (
    <div>
      <div className="text-lg font-bold text-center invisible">
        { character }
      </div>
      <div className="h-1 w-10 bg-black mx-5"/>          
    </div>
  )
}

export default Word