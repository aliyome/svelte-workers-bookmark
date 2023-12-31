-- Migration number: 0000 	 2023-08-30T03:16:51.737Z
CREATE TABLE `bookmarks` (
	`id` integer PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`userId` integer NOT NULL,
	`url` text NOT NULL,
	`title` text,
	`comment` text,
	`imageKey` text,
	`isProcessed` integer DEFAULT false NOT NULL,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`googleProfileId` text NOT NULL,
	`iconUrl` text,
	`displayName` text NOT NULL,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `bookmarks_userId_url_unique` ON `bookmarks` (`userId`,`url`);