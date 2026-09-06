import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Regular expression to extract YouTube Video ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;

    if (!videoId) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    // Call public YouTube oEmbed API
    const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const response = await fetch(oEmbedUrl);
    
    if (!response.ok) {
      return NextResponse.json({
        videoId,
        title: `Financial Reel #${videoId.substring(0, 4)}`,
        description: 'Personal Finance and Money Management education clip.',
        author: 'Capital Mastery'
      });
    }

    const data = await response.json();

    return NextResponse.json({
      videoId,
      title: data.title || 'Untitled Reel',
      description: `Watch this financial video from ${data.author_name || 'YouTube'}.`,
      author: data.author_name || 'Capital Mastery'
    });
  } catch (error) {
    console.error('Error fetching YouTube metadata:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
