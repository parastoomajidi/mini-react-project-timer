
export const formatTime = (second)=>{
    const m =Math.floor(second/60).toString().padStart(2, '0');
    const s = (second% 60).toString().padEnd(2, '0');
    return `${m}:${s}`
}