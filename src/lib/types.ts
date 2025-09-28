export interface PageData {
	title: string;
	description: string;
	hero: {
		title: string;
		description: string;
		headline?: {
			label: string;
			to: string;
			icon?: string;
		};
		links: Array<{
			label: string;
			to: string;
			icon?: string;
			trailing?: boolean;
			size?: string;
			color?: string;
			target?: string;
		}>;
	};
	features: {
		title: string;
		description: string;
		headline?: string;
		items: Array<{
			title: string;
			description: string;
			icon: string;
		}>;
	};
	ecosystem: {
		title: string;
		description: string;
		links: Array<{
			label: string;
			to: string;
			icon?: string;
			trailing?: boolean;
			size?: string;
			target?: string;
		}>;
	};
	cta: {
		title: string;
		description: string;
		links: Array<{
			label: string;
			to: string;
			leadingIcon?: string;
			trailingIcon?: string;
			size?: string;
		}>;
	};
}