import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { join } from 'path';

export function loadYamlContent(filename: string) {
	try {
		const filePath = join(process.cwd(), 'content', filename);
		const fileContents = readFileSync(filePath, 'utf8');
		return yaml.load(fileContents);
	} catch (error) {
		console.error(`Error loading ${filename}:`, error);
		return null;
	}
}

export function loadMarkdownContent(filename: string) {
	try {
		const filePath = join(process.cwd(), 'content', filename);
		const fileContents = readFileSync(filePath, 'utf8');
		return fileContents;
	} catch (error) {
		console.error(`Error loading ${filename}:`, error);
		return null;
	}
}