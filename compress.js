const { execFileSync } = require('child_process');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const path = require('path');
const fs = require('fs');

const workDir = path.join(__dirname, 'public', 'images', 'work');
const videos = [
  'AI project.mp4',
  'Summer camp Ai promotion ads 2.mp4',
  'onam 2.mp4'
];

console.log(`Using ffmpeg at: ${ffmpegPath}`);

for (const video of videos) {
  const input = path.join(workDir, video);
  const output = path.join(workDir, `compressed_${video}`);
  
  if (!fs.existsSync(input)) {
    console.log(`File not found: ${input}`);
    continue;
  }
  
  console.log(`\nCompressing: ${video}...`);
  try {
    // -an: remove audio (since it's muted in HTML)
    // -vcodec libx264: use h264
    // -crf 30: high compression (lower quality, much smaller size)
    // -preset fast: faster encoding
    // -vf scale=-2:720: scale down to 720p height
    execFileSync(ffmpegPath, [
      '-y',
      '-i', input,
      '-vcodec', 'libx264',
      '-crf', '32',
      '-preset', 'fast',
      '-vf', 'scale=-2:720',
      '-an',
      output
    ], { stdio: 'inherit' });
    
    // Replace original with compressed
    fs.renameSync(output, input);
    console.log(`Successfully compressed and replaced: ${video}`);
  } catch (error) {
    console.error(`Failed to compress ${video}:`, error.message);
  }
}
console.log('\nAll compression tasks finished.');
