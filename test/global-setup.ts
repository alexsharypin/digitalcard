import { execSync } from 'node:child_process';

export default function setup() {
  execSync('prisma migrate deploy', { stdio: 'inherit' });
  execSync('prisma db seed', { stdio: 'inherit' });
}
