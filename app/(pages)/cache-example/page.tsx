type Time = {
  datetime: string;
}

function formatTime(time: Time): string {
  const date: Date = new Date(time.datetime);

  const hours: string = date.getHours().toString().padStart(2, '0');
  const minutes: string = date.getMinutes().toString().padStart(2, '0');
  const seconds: string = date.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

async function getTimeCached(): Promise<String> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const data: Time = await res.json();
  return await formatTime(data);
}

async function getTimeNow(): Promise<String> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
    {
      cache: 'no-store',
    }
  );
  const data: Time = await res.json();
  return await formatTime(data);
}

export default async function Page() {
  const [cachedTime, uncachedTime] = await Promise.all([getTimeCached(), getTimeNow()]);

  return (
    <>
      <h1 className="text-2xl font-mono mb-10">Cached time: {cachedTime}</h1>
      <h1 className="text-5xl bold italic">Time now: {uncachedTime}</h1>
    </>
  )
}
