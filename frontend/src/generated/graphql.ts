import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
	JSON: any;
	Upload: any;
};

export type AboutMe = {
	__typename?: 'AboutMe';
	createdAt: Maybe<Scalars['DateTime']>;
	description: Scalars['String'];
	publishedAt: Maybe<Scalars['DateTime']>;
	updatedAt: Maybe<Scalars['DateTime']>;
};

export type AboutMeEntity = {
	__typename?: 'AboutMeEntity';
	attributes: Maybe<AboutMe>;
	id: Maybe<Scalars['ID']>;
};

export type AboutMeEntityResponse = {
	__typename?: 'AboutMeEntityResponse';
	data: Maybe<AboutMeEntity>;
};

export type AboutMeEntityResponseCollection = {
	__typename?: 'AboutMeEntityResponseCollection';
	data: Array<AboutMeEntity>;
	meta: ResponseCollectionMeta;
};

export type AboutMeFiltersInput = {
	and: InputMaybe<Array<InputMaybe<AboutMeFiltersInput>>>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	description: InputMaybe<StringFilterInput>;
	id: InputMaybe<IdFilterInput>;
	not: InputMaybe<AboutMeFiltersInput>;
	or: InputMaybe<Array<InputMaybe<AboutMeFiltersInput>>>;
	publishedAt: InputMaybe<DateTimeFilterInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AboutMeInput = {
	description: InputMaybe<Scalars['String']>;
	publishedAt: InputMaybe<Scalars['DateTime']>;
};

export type BooleanFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	contains: InputMaybe<Scalars['Boolean']>;
	containsi: InputMaybe<Scalars['Boolean']>;
	endsWith: InputMaybe<Scalars['Boolean']>;
	eq: InputMaybe<Scalars['Boolean']>;
	eqi: InputMaybe<Scalars['Boolean']>;
	gt: InputMaybe<Scalars['Boolean']>;
	gte: InputMaybe<Scalars['Boolean']>;
	in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	lt: InputMaybe<Scalars['Boolean']>;
	lte: InputMaybe<Scalars['Boolean']>;
	ne: InputMaybe<Scalars['Boolean']>;
	not: InputMaybe<BooleanFilterInput>;
	notContains: InputMaybe<Scalars['Boolean']>;
	notContainsi: InputMaybe<Scalars['Boolean']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	startsWith: InputMaybe<Scalars['Boolean']>;
};

export type DateTimeFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	contains: InputMaybe<Scalars['DateTime']>;
	containsi: InputMaybe<Scalars['DateTime']>;
	endsWith: InputMaybe<Scalars['DateTime']>;
	eq: InputMaybe<Scalars['DateTime']>;
	eqi: InputMaybe<Scalars['DateTime']>;
	gt: InputMaybe<Scalars['DateTime']>;
	gte: InputMaybe<Scalars['DateTime']>;
	in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	lt: InputMaybe<Scalars['DateTime']>;
	lte: InputMaybe<Scalars['DateTime']>;
	ne: InputMaybe<Scalars['DateTime']>;
	not: InputMaybe<DateTimeFilterInput>;
	notContains: InputMaybe<Scalars['DateTime']>;
	notContainsi: InputMaybe<Scalars['DateTime']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	startsWith: InputMaybe<Scalars['DateTime']>;
};

export type Doll = {
	__typename?: 'Doll';
	color: Scalars['String'];
	createdAt: Maybe<Scalars['DateTime']>;
	description: Scalars['String'];
	images: UploadFileRelationResponseCollection;
	includedItems: Scalars['String'];
	isSold: Scalars['Boolean'];
	name: Scalars['String'];
	placeholder: UploadFileEntityResponse;
	price: Scalars['Int'];
	publishedAt: Maybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	updatedAt: Maybe<Scalars['DateTime']>;
	workDone: Scalars['String'];
};

export type DollImagesArgs = {
	filters: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DollEntity = {
	__typename?: 'DollEntity';
	attributes: Maybe<Doll>;
	id: Maybe<Scalars['ID']>;
};

export type DollEntityResponse = {
	__typename?: 'DollEntityResponse';
	data: Maybe<DollEntity>;
};

export type DollEntityResponseCollection = {
	__typename?: 'DollEntityResponseCollection';
	data: Array<DollEntity>;
	meta: ResponseCollectionMeta;
};

export type DollFiltersInput = {
	and: InputMaybe<Array<InputMaybe<DollFiltersInput>>>;
	color: InputMaybe<StringFilterInput>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	description: InputMaybe<StringFilterInput>;
	id: InputMaybe<IdFilterInput>;
	includedItems: InputMaybe<StringFilterInput>;
	isSold: InputMaybe<BooleanFilterInput>;
	name: InputMaybe<StringFilterInput>;
	not: InputMaybe<DollFiltersInput>;
	or: InputMaybe<Array<InputMaybe<DollFiltersInput>>>;
	price: InputMaybe<IntFilterInput>;
	publishedAt: InputMaybe<DateTimeFilterInput>;
	slug: InputMaybe<StringFilterInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
	workDone: InputMaybe<StringFilterInput>;
};

export type DollInput = {
	color: InputMaybe<Scalars['String']>;
	description: InputMaybe<Scalars['String']>;
	images: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	includedItems: InputMaybe<Scalars['String']>;
	isSold: InputMaybe<Scalars['Boolean']>;
	name: InputMaybe<Scalars['String']>;
	placeholder: InputMaybe<Scalars['ID']>;
	price: InputMaybe<Scalars['Int']>;
	publishedAt: InputMaybe<Scalars['DateTime']>;
	slug: InputMaybe<Scalars['String']>;
	workDone: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
	alternativeText: InputMaybe<Scalars['String']>;
	caption: InputMaybe<Scalars['String']>;
	name: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	contains: InputMaybe<Scalars['Float']>;
	containsi: InputMaybe<Scalars['Float']>;
	endsWith: InputMaybe<Scalars['Float']>;
	eq: InputMaybe<Scalars['Float']>;
	eqi: InputMaybe<Scalars['Float']>;
	gt: InputMaybe<Scalars['Float']>;
	gte: InputMaybe<Scalars['Float']>;
	in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	lt: InputMaybe<Scalars['Float']>;
	lte: InputMaybe<Scalars['Float']>;
	ne: InputMaybe<Scalars['Float']>;
	not: InputMaybe<FloatFilterInput>;
	notContains: InputMaybe<Scalars['Float']>;
	notContainsi: InputMaybe<Scalars['Float']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	startsWith: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
	| AboutMe
	| Doll
	| I18NLocale
	| UploadFile
	| UploadFolder
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsUser;

export type I18NLocale = {
	__typename?: 'I18NLocale';
	code: Maybe<Scalars['String']>;
	createdAt: Maybe<Scalars['DateTime']>;
	name: Maybe<Scalars['String']>;
	updatedAt: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
	__typename?: 'I18NLocaleEntity';
	attributes: Maybe<I18NLocale>;
	id: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
	__typename?: 'I18NLocaleEntityResponse';
	data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
	__typename?: 'I18NLocaleEntityResponseCollection';
	data: Array<I18NLocaleEntity>;
	meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
	and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	code: InputMaybe<StringFilterInput>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	id: InputMaybe<IdFilterInput>;
	name: InputMaybe<StringFilterInput>;
	not: InputMaybe<I18NLocaleFiltersInput>;
	or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	contains: InputMaybe<Scalars['ID']>;
	containsi: InputMaybe<Scalars['ID']>;
	endsWith: InputMaybe<Scalars['ID']>;
	eq: InputMaybe<Scalars['ID']>;
	eqi: InputMaybe<Scalars['ID']>;
	gt: InputMaybe<Scalars['ID']>;
	gte: InputMaybe<Scalars['ID']>;
	in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	lt: InputMaybe<Scalars['ID']>;
	lte: InputMaybe<Scalars['ID']>;
	ne: InputMaybe<Scalars['ID']>;
	not: InputMaybe<IdFilterInput>;
	notContains: InputMaybe<Scalars['ID']>;
	notContainsi: InputMaybe<Scalars['ID']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	startsWith: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	contains: InputMaybe<Scalars['Int']>;
	containsi: InputMaybe<Scalars['Int']>;
	endsWith: InputMaybe<Scalars['Int']>;
	eq: InputMaybe<Scalars['Int']>;
	eqi: InputMaybe<Scalars['Int']>;
	gt: InputMaybe<Scalars['Int']>;
	gte: InputMaybe<Scalars['Int']>;
	in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	lt: InputMaybe<Scalars['Int']>;
	lte: InputMaybe<Scalars['Int']>;
	ne: InputMaybe<Scalars['Int']>;
	not: InputMaybe<IntFilterInput>;
	notContains: InputMaybe<Scalars['Int']>;
	notContainsi: InputMaybe<Scalars['Int']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	startsWith: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	contains: InputMaybe<Scalars['JSON']>;
	containsi: InputMaybe<Scalars['JSON']>;
	endsWith: InputMaybe<Scalars['JSON']>;
	eq: InputMaybe<Scalars['JSON']>;
	eqi: InputMaybe<Scalars['JSON']>;
	gt: InputMaybe<Scalars['JSON']>;
	gte: InputMaybe<Scalars['JSON']>;
	in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	lt: InputMaybe<Scalars['JSON']>;
	lte: InputMaybe<Scalars['JSON']>;
	ne: InputMaybe<Scalars['JSON']>;
	not: InputMaybe<JsonFilterInput>;
	notContains: InputMaybe<Scalars['JSON']>;
	notContainsi: InputMaybe<Scalars['JSON']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	startsWith: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	/** Change user password. Confirm with the current password. */
	changePassword: Maybe<UsersPermissionsLoginPayload>;
	createAboutMe: Maybe<AboutMeEntityResponse>;
	createDoll: Maybe<DollEntityResponse>;
	createUploadFile: Maybe<UploadFileEntityResponse>;
	createUploadFolder: Maybe<UploadFolderEntityResponse>;
	/** Create a new role */
	createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
	/** Create a new user */
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteAboutMe: Maybe<AboutMeEntityResponse>;
	deleteDoll: Maybe<DollEntityResponse>;
	deleteUploadFile: Maybe<UploadFileEntityResponse>;
	deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
	/** Delete an existing role */
	deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
	/** Delete an existing user */
	deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	/** Confirm an email users email address */
	emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
	/** Request a reset password token */
	forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
	login: UsersPermissionsLoginPayload;
	multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
	/** Register a user */
	register: UsersPermissionsLoginPayload;
	removeFile: Maybe<UploadFileEntityResponse>;
	/** Reset user password. Confirm with a code (resetToken from forgotPassword) */
	resetPassword: Maybe<UsersPermissionsLoginPayload>;
	updateAboutMe: Maybe<AboutMeEntityResponse>;
	updateDoll: Maybe<DollEntityResponse>;
	updateFileInfo: UploadFileEntityResponse;
	updateUploadFile: Maybe<UploadFileEntityResponse>;
	updateUploadFolder: Maybe<UploadFolderEntityResponse>;
	/** Update an existing role */
	updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
	/** Update an existing user */
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
	currentPassword: Scalars['String'];
	password: Scalars['String'];
	passwordConfirmation: Scalars['String'];
};

export type MutationCreateAboutMeArgs = {
	data: AboutMeInput;
};

export type MutationCreateDollArgs = {
	data: DollInput;
};

export type MutationCreateUploadFileArgs = {
	data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
	data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
};

export type MutationDeleteAboutMeArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteDollArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
	id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
	email: Scalars['String'];
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
	field: InputMaybe<Scalars['String']>;
	files: Array<InputMaybe<Scalars['Upload']>>;
	ref: InputMaybe<Scalars['String']>;
	refId: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
	id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
	code: Scalars['String'];
	password: Scalars['String'];
	passwordConfirmation: Scalars['String'];
};

export type MutationUpdateAboutMeArgs = {
	data: AboutMeInput;
	id: Scalars['ID'];
};

export type MutationUpdateDollArgs = {
	data: DollInput;
	id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
	id: Scalars['ID'];
	info: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUploadFileArgs = {
	data: UploadFileInput;
	id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
	data: UploadFolderInput;
	id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
	id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
	id: Scalars['ID'];
};

export type MutationUploadArgs = {
	field: InputMaybe<Scalars['String']>;
	file: Scalars['Upload'];
	info: InputMaybe<FileInfoInput>;
	ref: InputMaybe<Scalars['String']>;
	refId: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
	__typename?: 'Pagination';
	page: Scalars['Int'];
	pageCount: Scalars['Int'];
	pageSize: Scalars['Int'];
	total: Scalars['Int'];
};

export type PaginationArg = {
	limit: InputMaybe<Scalars['Int']>;
	page: InputMaybe<Scalars['Int']>;
	pageSize: InputMaybe<Scalars['Int']>;
	start: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
	Live = 'LIVE',
	Preview = 'PREVIEW',
}

export type Query = {
	__typename?: 'Query';
	aboutMe: Maybe<AboutMeEntityResponse>;
	aboutMes: Maybe<AboutMeEntityResponseCollection>;
	doll: Maybe<DollEntityResponse>;
	dolls: Maybe<DollEntityResponseCollection>;
	i18NLocale: Maybe<I18NLocaleEntityResponse>;
	i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
	me: Maybe<UsersPermissionsMe>;
	uploadFile: Maybe<UploadFileEntityResponse>;
	uploadFiles: Maybe<UploadFileEntityResponseCollection>;
	uploadFolder: Maybe<UploadFolderEntityResponse>;
	uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
	usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
	usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
	usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
	usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAboutMeArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryAboutMesArgs = {
	filters: InputMaybe<AboutMeFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryDollArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryDollsArgs = {
	filters: InputMaybe<DollFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryI18NLocaleArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
	filters: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
	filters: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
	filters: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
	filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
	id: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
	filters: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
	__typename?: 'ResponseCollectionMeta';
	pagination: Pagination;
};

export type StringFilterInput = {
	and: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	between: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	contains: InputMaybe<Scalars['String']>;
	containsi: InputMaybe<Scalars['String']>;
	endsWith: InputMaybe<Scalars['String']>;
	eq: InputMaybe<Scalars['String']>;
	eqi: InputMaybe<Scalars['String']>;
	gt: InputMaybe<Scalars['String']>;
	gte: InputMaybe<Scalars['String']>;
	in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	lt: InputMaybe<Scalars['String']>;
	lte: InputMaybe<Scalars['String']>;
	ne: InputMaybe<Scalars['String']>;
	not: InputMaybe<StringFilterInput>;
	notContains: InputMaybe<Scalars['String']>;
	notContainsi: InputMaybe<Scalars['String']>;
	notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	notNull: InputMaybe<Scalars['Boolean']>;
	null: InputMaybe<Scalars['Boolean']>;
	or: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	startsWith: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
	__typename?: 'UploadFile';
	alternativeText: Maybe<Scalars['String']>;
	caption: Maybe<Scalars['String']>;
	createdAt: Maybe<Scalars['DateTime']>;
	ext: Maybe<Scalars['String']>;
	formats: Maybe<Scalars['JSON']>;
	hash: Scalars['String'];
	height: Maybe<Scalars['Int']>;
	mime: Scalars['String'];
	name: Scalars['String'];
	previewUrl: Maybe<Scalars['String']>;
	provider: Scalars['String'];
	provider_metadata: Maybe<Scalars['JSON']>;
	related: Maybe<Array<Maybe<GenericMorph>>>;
	size: Scalars['Float'];
	updatedAt: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
	width: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
	__typename?: 'UploadFileEntity';
	attributes: Maybe<UploadFile>;
	id: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
	__typename?: 'UploadFileEntityResponse';
	data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
	__typename?: 'UploadFileEntityResponseCollection';
	data: Array<UploadFileEntity>;
	meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
	alternativeText: InputMaybe<StringFilterInput>;
	and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	caption: InputMaybe<StringFilterInput>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	ext: InputMaybe<StringFilterInput>;
	folder: InputMaybe<UploadFolderFiltersInput>;
	folderPath: InputMaybe<StringFilterInput>;
	formats: InputMaybe<JsonFilterInput>;
	hash: InputMaybe<StringFilterInput>;
	height: InputMaybe<IntFilterInput>;
	id: InputMaybe<IdFilterInput>;
	mime: InputMaybe<StringFilterInput>;
	name: InputMaybe<StringFilterInput>;
	not: InputMaybe<UploadFileFiltersInput>;
	or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	previewUrl: InputMaybe<StringFilterInput>;
	provider: InputMaybe<StringFilterInput>;
	provider_metadata: InputMaybe<JsonFilterInput>;
	size: InputMaybe<FloatFilterInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
	url: InputMaybe<StringFilterInput>;
	width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
	alternativeText: InputMaybe<Scalars['String']>;
	caption: InputMaybe<Scalars['String']>;
	ext: InputMaybe<Scalars['String']>;
	folder: InputMaybe<Scalars['ID']>;
	folderPath: InputMaybe<Scalars['String']>;
	formats: InputMaybe<Scalars['JSON']>;
	hash: InputMaybe<Scalars['String']>;
	height: InputMaybe<Scalars['Int']>;
	mime: InputMaybe<Scalars['String']>;
	name: InputMaybe<Scalars['String']>;
	previewUrl: InputMaybe<Scalars['String']>;
	provider: InputMaybe<Scalars['String']>;
	provider_metadata: InputMaybe<Scalars['JSON']>;
	size: InputMaybe<Scalars['Float']>;
	url: InputMaybe<Scalars['String']>;
	width: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
	__typename?: 'UploadFileRelationResponseCollection';
	data: Array<UploadFileEntity>;
};

export type UploadFolder = {
	__typename?: 'UploadFolder';
	children: Maybe<UploadFolderRelationResponseCollection>;
	createdAt: Maybe<Scalars['DateTime']>;
	files: Maybe<UploadFileRelationResponseCollection>;
	name: Scalars['String'];
	parent: Maybe<UploadFolderEntityResponse>;
	path: Scalars['String'];
	pathId: Scalars['Int'];
	updatedAt: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
	filters: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
	filters: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
	__typename?: 'UploadFolderEntity';
	attributes: Maybe<UploadFolder>;
	id: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
	__typename?: 'UploadFolderEntityResponse';
	data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
	__typename?: 'UploadFolderEntityResponseCollection';
	data: Array<UploadFolderEntity>;
	meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
	and: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
	children: InputMaybe<UploadFolderFiltersInput>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	files: InputMaybe<UploadFileFiltersInput>;
	id: InputMaybe<IdFilterInput>;
	name: InputMaybe<StringFilterInput>;
	not: InputMaybe<UploadFolderFiltersInput>;
	or: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
	parent: InputMaybe<UploadFolderFiltersInput>;
	path: InputMaybe<StringFilterInput>;
	pathId: InputMaybe<IntFilterInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
	children: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	files: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	name: InputMaybe<Scalars['String']>;
	parent: InputMaybe<Scalars['ID']>;
	path: InputMaybe<Scalars['String']>;
	pathId: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
	__typename?: 'UploadFolderRelationResponseCollection';
	data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
	__typename?: 'UsersPermissionsCreateRolePayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
	__typename?: 'UsersPermissionsDeleteRolePayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String'];
	password: Scalars['String'];
	provider: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload';
	jwt: Maybe<Scalars['String']>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe';
	blocked: Maybe<Scalars['Boolean']>;
	confirmed: Maybe<Scalars['Boolean']>;
	email: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	role: Maybe<UsersPermissionsMeRole>;
	username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole';
	description: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	name: Scalars['String'];
	type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
	__typename?: 'UsersPermissionsPasswordPayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission';
	action: Scalars['String'];
	createdAt: Maybe<Scalars['DateTime']>;
	role: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
	__typename?: 'UsersPermissionsPermissionEntity';
	attributes: Maybe<UsersPermissionsPermission>;
	id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
	action: InputMaybe<StringFilterInput>;
	and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	id: InputMaybe<IdFilterInput>;
	not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	role: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
	__typename?: 'UsersPermissionsPermissionRelationResponseCollection';
	data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
	email: Scalars['String'];
	password: Scalars['String'];
	username: Scalars['String'];
};

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole';
	createdAt: Maybe<Scalars['DateTime']>;
	description: Maybe<Scalars['String']>;
	name: Scalars['String'];
	permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	type: Maybe<Scalars['String']>;
	updatedAt: Maybe<Scalars['DateTime']>;
	users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
	filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
	filters: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
	__typename?: 'UsersPermissionsRoleEntity';
	attributes: Maybe<UsersPermissionsRole>;
	id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
	__typename?: 'UsersPermissionsRoleEntityResponse';
	data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
	__typename?: 'UsersPermissionsRoleEntityResponseCollection';
	data: Array<UsersPermissionsRoleEntity>;
	meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
	and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	description: InputMaybe<StringFilterInput>;
	id: InputMaybe<IdFilterInput>;
	name: InputMaybe<StringFilterInput>;
	not: InputMaybe<UsersPermissionsRoleFiltersInput>;
	or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	type: InputMaybe<StringFilterInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
	users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
	description: InputMaybe<Scalars['String']>;
	name: InputMaybe<Scalars['String']>;
	permissions: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	type: InputMaybe<Scalars['String']>;
	users: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
	__typename?: 'UsersPermissionsUpdateRolePayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser';
	blocked: Maybe<Scalars['Boolean']>;
	confirmed: Maybe<Scalars['Boolean']>;
	createdAt: Maybe<Scalars['DateTime']>;
	email: Scalars['String'];
	provider: Maybe<Scalars['String']>;
	role: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt: Maybe<Scalars['DateTime']>;
	username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
	__typename?: 'UsersPermissionsUserEntity';
	attributes: Maybe<UsersPermissionsUser>;
	id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
	__typename?: 'UsersPermissionsUserEntityResponse';
	data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
	__typename?: 'UsersPermissionsUserEntityResponseCollection';
	data: Array<UsersPermissionsUserEntity>;
	meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
	and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	blocked: InputMaybe<BooleanFilterInput>;
	confirmationToken: InputMaybe<StringFilterInput>;
	confirmed: InputMaybe<BooleanFilterInput>;
	createdAt: InputMaybe<DateTimeFilterInput>;
	email: InputMaybe<StringFilterInput>;
	id: InputMaybe<IdFilterInput>;
	not: InputMaybe<UsersPermissionsUserFiltersInput>;
	or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	password: InputMaybe<StringFilterInput>;
	provider: InputMaybe<StringFilterInput>;
	resetPasswordToken: InputMaybe<StringFilterInput>;
	role: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt: InputMaybe<DateTimeFilterInput>;
	username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
	blocked: InputMaybe<Scalars['Boolean']>;
	confirmationToken: InputMaybe<Scalars['String']>;
	confirmed: InputMaybe<Scalars['Boolean']>;
	email: InputMaybe<Scalars['String']>;
	password: InputMaybe<Scalars['String']>;
	provider: InputMaybe<Scalars['String']>;
	resetPasswordToken: InputMaybe<Scalars['String']>;
	role: InputMaybe<Scalars['ID']>;
	username: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
	__typename?: 'UsersPermissionsUserRelationResponseCollection';
	data: Array<UsersPermissionsUserEntity>;
};

export type AboutMeQueryVariables = Exact<{ [key: string]: never }>;

export type AboutMeQuery = {
	__typename?: 'Query';
	aboutMe: {
		__typename?: 'AboutMeEntityResponse';
		data: {
			__typename?: 'AboutMeEntity';
			attributes: { __typename?: 'AboutMe'; description: string };
		};
	};
};

export type GetDollBySlugQueryVariables = Exact<{
	slug: Scalars['String'];
}>;

export type GetDollBySlugQuery = {
	__typename?: 'Query';
	dolls: {
		__typename?: 'DollEntityResponseCollection';
		data: Array<{
			__typename?: 'DollEntity';
			attributes: {
				__typename?: 'Doll';
				isSold: boolean;
				name: string;
				description: string;
				price: number;
				workDone: string;
				includedItems: string;
				slug: string;
				color: string;
				images: {
					__typename?: 'UploadFileRelationResponseCollection';
					data: Array<{
						__typename?: 'UploadFileEntity';
						attributes: { __typename?: 'UploadFile'; url: string };
					}>;
				};
			};
		}>;
	};
};

export type DollsQueryVariables = Exact<{ [key: string]: never }>;

export type DollsQuery = {
	__typename?: 'Query';
	dolls: {
		__typename?: 'DollEntityResponseCollection';
		data: Array<{
			__typename?: 'DollEntity';
			attributes: {
				__typename?: 'Doll';
				name: string;
				isSold: boolean;
				description: string;
				price: number;
				workDone: string;
				includedItems: string;
				slug: string;
				color: string;
				images: {
					__typename?: 'UploadFileRelationResponseCollection';
					data: Array<{
						__typename?: 'UploadFileEntity';
						attributes: { __typename?: 'UploadFile'; url: string };
					}>;
				};
				placeholder: {
					__typename?: 'UploadFileEntityResponse';
					data: {
						__typename?: 'UploadFileEntity';
						attributes: { __typename?: 'UploadFile'; url: string };
					};
				};
			};
		}>;
	};
};

export const AboutMeDocument = gql`
	query AboutMe {
		aboutMe {
			data {
				attributes {
					description
				}
			}
		}
	}
`;

/**
 * __useAboutMeQuery__
 *
 * To run a query within a React component, call `useAboutMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutMeQuery(
	baseOptions?: Apollo.QueryHookOptions<AboutMeQuery, AboutMeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<AboutMeQuery, AboutMeQueryVariables>(
		AboutMeDocument,
		options
	);
}
export function useAboutMeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AboutMeQuery,
		AboutMeQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<AboutMeQuery, AboutMeQueryVariables>(
		AboutMeDocument,
		options
	);
}
export type AboutMeQueryHookResult = ReturnType<typeof useAboutMeQuery>;
export type AboutMeLazyQueryHookResult = ReturnType<typeof useAboutMeLazyQuery>;
export type AboutMeQueryResult = Apollo.QueryResult<
	AboutMeQuery,
	AboutMeQueryVariables
>;
export const GetDollBySlugDocument = gql`
	query getDollBySlug($slug: String!) {
		dolls(filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					isSold
					name
					description
					images {
						data {
							attributes {
								url
							}
						}
					}
					price
					workDone
					includedItems
					slug
					color
				}
			}
		}
	}
`;

/**
 * __useGetDollBySlugQuery__
 *
 * To run a query within a React component, call `useGetDollBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDollBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDollBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetDollBySlugQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetDollBySlugQuery,
		GetDollBySlugQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetDollBySlugQuery, GetDollBySlugQueryVariables>(
		GetDollBySlugDocument,
		options
	);
}
export function useGetDollBySlugLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetDollBySlugQuery,
		GetDollBySlugQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetDollBySlugQuery, GetDollBySlugQueryVariables>(
		GetDollBySlugDocument,
		options
	);
}
export type GetDollBySlugQueryHookResult = ReturnType<
	typeof useGetDollBySlugQuery
>;
export type GetDollBySlugLazyQueryHookResult = ReturnType<
	typeof useGetDollBySlugLazyQuery
>;
export type GetDollBySlugQueryResult = Apollo.QueryResult<
	GetDollBySlugQuery,
	GetDollBySlugQueryVariables
>;
export const DollsDocument = gql`
	query Dolls {
		dolls {
			data {
				attributes {
					name
					isSold
					description
					images {
						data {
							attributes {
								url
							}
						}
					}
					placeholder {
						data {
							attributes {
								url
							}
						}
					}
					price
					workDone
					includedItems
					slug
					color
				}
			}
		}
	}
`;

/**
 * __useDollsQuery__
 *
 * To run a query within a React component, call `useDollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDollsQuery(
	baseOptions?: Apollo.QueryHookOptions<DollsQuery, DollsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<DollsQuery, DollsQueryVariables>(
		DollsDocument,
		options
	);
}
export function useDollsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<DollsQuery, DollsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<DollsQuery, DollsQueryVariables>(
		DollsDocument,
		options
	);
}
export type DollsQueryHookResult = ReturnType<typeof useDollsQuery>;
export type DollsLazyQueryHookResult = ReturnType<typeof useDollsLazyQuery>;
export type DollsQueryResult = Apollo.QueryResult<
	DollsQuery,
	DollsQueryVariables
>;
