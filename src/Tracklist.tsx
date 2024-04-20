export type TracklistProps = {
  tracks: string[];
};

// Helper to format track numbers with preceding zero
const formatTrackNum = (num: number) => (num < 10 ? "0" + num : num);

function Tracklist({ tracks }: TracklistProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold uppercase">Tracklist</h2>
      <ol>
        {tracks.map((name, index) => (
          <li>{`${formatTrackNum(index + 1)}. ${name}`}</li>
        ))}
      </ol>
    </div>
  );
}

export default Tracklist;
