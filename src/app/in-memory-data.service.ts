import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ELEVES } from './eleves/my-eleves';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let eleves = ELEVES;
		return { eleves };
	}
}
