import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const PORT = Number(process.env.PORT || 3000);
const root=resolve(import.meta.dirname);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.ico':'image/x-icon','.txt':'text/plain; charset=utf-8'};
const allowed=new Set(Object.keys(types));
http.createServer(async(req,res)=>{
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end();return;}
  let pathname;
  try{pathname=new URL(req.url,'http://localhost').pathname;pathname=decodeURIComponent(pathname);}catch{res.writeHead(400);res.end();return;}
  if(pathname==='/health'){res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify({ok:true,service:'youssef-portfolio'}));return;}
  if(pathname==='/')pathname='/index.html';
  const filepath=resolve(root,'.'+pathname);
  if(!filepath.startsWith(root+sep)||pathname.split('/').some(v=>v.startsWith('.'))||!allowed.has(extname(filepath).toLowerCase())){res.writeHead(404);res.end('Not found');return;}
  try{const info=await stat(filepath);if(!info.isFile())throw Error('not file');
    const data=await readFile(filepath);
    res.writeHead(200,{'content-type':types[extname(filepath).toLowerCase()],'content-length':data.length,'cache-control':'public, max-age=300','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'});
    if(req.method==='HEAD')res.end();else res.end(data);
  }catch{res.writeHead(404,{'content-type':'text/plain; charset=utf-8'});res.end('Not found');}
}).listen(PORT,'0.0.0.0',()=>console.log(`Portfolio listening on ${PORT}`));
