// * global
declare global {
	interface Navigator {
		msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
		browserLanguage: string;
	}
}
declare interface Window {
	$loading: any;
	$message: any;
}

declare const __APP_INFO__: {
	pkg: {
		name: string;
		version: string;
		dependencies: Recordable<string>;
		devDependencies: Recordable<string>;
	};
	lastBuildTime: string;
};
