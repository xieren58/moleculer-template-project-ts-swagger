import { IncomingMessage } from 'http';
import { ActionSchema, ActionParamSchema } from 'moleculer';
import { ActionOptions } from '@ourparentcenter/moleculer-decorators-extended';
import { Schema, SchemaType, SchemaTypeOpts, Types } from 'mongoose';
import { UserRole } from './user';

// eslint-disable-next-line @typescript-eslint/naming-convention
export type definitionType<T> = (
	collection?: string,
) => Record<keyof Required<T>, SchemaTypeOpts<any> | Schema | SchemaType>;

export type ObjectId = Types.ObjectId | string;
export type ObjectIdNull = ObjectId | null;

export type DBDialog = 'local' | 'file' | 'mongodb';

export interface DBInfo {
	dialect: DBDialog;
	user: string;
	password: string;
	host: string;
	port: number;
	dbname: string;
	collection: string;
}

export interface RouteSchemaOpts {
	path: string;
	whitelist?: string[];
	authorization?: boolean;
	authentication?: boolean;
	roles?: UserRole[];
	aliases?: any;
}

export interface RouteSchema {
	path: string;
	mappingPolicy?: 'restricted' | 'all';
	opts: RouteSchemaOpts;
	middlewares: ((req: any, res: any, next: any) => void)[];
	authorization?: boolean;
	authentication?: boolean;
	logging?: boolean;
	etag?: boolean;
	cors?: any;
	rateLimit?: any;
	whitelist?: string[];
	hasWhitelist: boolean;
	callOptions?: any;
}

export interface RequestMessage extends IncomingMessage {
	$action: ActionSchema;
	$params: ActionParamSchema;
	$route: RouteSchema;
}

export interface RestOptions extends ActionOptions {
	auth?: boolean;
	roles?: UserRole | UserRole[];
}

export interface ApiGatewayMeta {
	$statusCode?: number;
	$statusMessage?: string;
	$responseType?: string;
	$responseHeaders?: any;
	$location?: string;
}
