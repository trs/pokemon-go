export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    ObjectId: any;
};
export declare type DeleteManyPayload = {
    __typename?: 'DeleteManyPayload';
    deletedCount: Scalars['Int'];
};
export declare type InsertManyPayload = {
    __typename?: 'InsertManyPayload';
    insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    deleteManyPokemons?: Maybe<DeleteManyPayload>;
    deleteOnePokemon?: Maybe<Pokemon>;
    insertManyPokemons?: Maybe<InsertManyPayload>;
    insertOnePokemon?: Maybe<Pokemon>;
    replaceOnePokemon?: Maybe<Pokemon>;
    updateManyPokemons?: Maybe<UpdateManyPayload>;
    updateOnePokemon?: Maybe<Pokemon>;
    upsertOnePokemon?: Maybe<Pokemon>;
};
export declare type MutationDeleteManyPokemonsArgs = {
    query?: Maybe<PokemonQueryInput>;
};
export declare type MutationDeleteOnePokemonArgs = {
    query: PokemonQueryInput;
};
export declare type MutationInsertManyPokemonsArgs = {
    data: Array<PokemonInsertInput>;
};
export declare type MutationInsertOnePokemonArgs = {
    data: PokemonInsertInput;
};
export declare type MutationReplaceOnePokemonArgs = {
    query?: Maybe<PokemonQueryInput>;
    data: PokemonInsertInput;
};
export declare type MutationUpdateManyPokemonsArgs = {
    query?: Maybe<PokemonQueryInput>;
    set: PokemonUpdateInput;
};
export declare type MutationUpdateOnePokemonArgs = {
    query?: Maybe<PokemonQueryInput>;
    set: PokemonUpdateInput;
};
export declare type MutationUpsertOnePokemonArgs = {
    data: PokemonInsertInput;
    query?: Maybe<PokemonQueryInput>;
};
export declare type Pokemon = {
    __typename?: 'Pokemon';
    _id?: Maybe<Scalars['ObjectId']>;
    forms?: Maybe<Array<Maybe<PokemonForm>>>;
    name?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    types?: Maybe<Array<Maybe<PokemonType>>>;
    uid?: Maybe<Scalars['String']>;
};
export declare type PokemonForm = {
    __typename?: 'PokemonForm';
    code?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type PokemonFormInsertInput = {
    name?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
};
export declare type PokemonFormQueryInput = {
    code_gte?: Maybe<Scalars['String']>;
    AND?: Maybe<Array<PokemonFormQueryInput>>;
    code_exists?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    code_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    name_lt?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    code_lt?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_exists?: Maybe<Scalars['Boolean']>;
    name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    name_lte?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    code_lte?: Maybe<Scalars['String']>;
    code_ne?: Maybe<Scalars['String']>;
    name_ne?: Maybe<Scalars['String']>;
    name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    OR?: Maybe<Array<PokemonFormQueryInput>>;
    code_gt?: Maybe<Scalars['String']>;
    code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type PokemonFormUpdateInput = {
    code?: Maybe<Scalars['String']>;
    code_unset?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    name_unset?: Maybe<Scalars['Boolean']>;
};
export declare type PokemonInsertInput = {
    forms?: Maybe<Array<Maybe<PokemonFormInsertInput>>>;
    name?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    types?: Maybe<Array<Maybe<PokemonTypeInsertInput>>>;
    uid?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['ObjectId']>;
};
export declare type PokemonQueryInput = {
    number_gte?: Maybe<Scalars['Int']>;
    uid_exists?: Maybe<Scalars['Boolean']>;
    forms_exists?: Maybe<Scalars['Boolean']>;
    forms_nin?: Maybe<Array<Maybe<PokemonFormQueryInput>>>;
    forms?: Maybe<Array<Maybe<PokemonFormQueryInput>>>;
    number_exists?: Maybe<Scalars['Boolean']>;
    OR?: Maybe<Array<PokemonQueryInput>>;
    _id_gt?: Maybe<Scalars['ObjectId']>;
    uid_lt?: Maybe<Scalars['String']>;
    types_exists?: Maybe<Scalars['Boolean']>;
    _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    number_lt?: Maybe<Scalars['Int']>;
    types_in?: Maybe<Array<Maybe<PokemonTypeQueryInput>>>;
    number?: Maybe<Scalars['Int']>;
    forms_in?: Maybe<Array<Maybe<PokemonFormQueryInput>>>;
    name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    uid_gte?: Maybe<Scalars['String']>;
    number_lte?: Maybe<Scalars['Int']>;
    _id_lt?: Maybe<Scalars['ObjectId']>;
    _id_ne?: Maybe<Scalars['ObjectId']>;
    _id?: Maybe<Scalars['ObjectId']>;
    uid_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_lte?: Maybe<Scalars['ObjectId']>;
    _id_gte?: Maybe<Scalars['ObjectId']>;
    types?: Maybe<Array<Maybe<PokemonTypeQueryInput>>>;
    name_exists?: Maybe<Scalars['Boolean']>;
    uid_ne?: Maybe<Scalars['String']>;
    AND?: Maybe<Array<PokemonQueryInput>>;
    name?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    number_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    uid_lte?: Maybe<Scalars['String']>;
    _id_exists?: Maybe<Scalars['Boolean']>;
    uid?: Maybe<Scalars['String']>;
    number_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
    name_lt?: Maybe<Scalars['String']>;
    types_nin?: Maybe<Array<Maybe<PokemonTypeQueryInput>>>;
    uid_gt?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    number_ne?: Maybe<Scalars['Int']>;
    name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    name_ne?: Maybe<Scalars['String']>;
    number_gt?: Maybe<Scalars['Int']>;
};
export declare enum PokemonSortByInput {
    UidAsc = "UID_ASC",
    UidDesc = "UID_DESC",
    IdAsc = "_ID_ASC",
    IdDesc = "_ID_DESC",
    NameAsc = "NAME_ASC",
    NameDesc = "NAME_DESC",
    NumberAsc = "NUMBER_ASC",
    NumberDesc = "NUMBER_DESC"
}
export declare type PokemonType = {
    __typename?: 'PokemonType';
    code?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type PokemonTypeInsertInput = {
    code?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type PokemonTypeQueryInput = {
    code?: Maybe<Scalars['String']>;
    name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    name_ne?: Maybe<Scalars['String']>;
    code_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    code_lte?: Maybe<Scalars['String']>;
    code_exists?: Maybe<Scalars['Boolean']>;
    code_gte?: Maybe<Scalars['String']>;
    name_exists?: Maybe<Scalars['Boolean']>;
    name_lte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    name_lt?: Maybe<Scalars['String']>;
    code_gt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    code_lt?: Maybe<Scalars['String']>;
    OR?: Maybe<Array<PokemonTypeQueryInput>>;
    code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    code_ne?: Maybe<Scalars['String']>;
    AND?: Maybe<Array<PokemonTypeQueryInput>>;
    name_gt?: Maybe<Scalars['String']>;
};
export declare type PokemonTypeUpdateInput = {
    code_unset?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    name_unset?: Maybe<Scalars['Boolean']>;
    code?: Maybe<Scalars['String']>;
};
export declare type PokemonUpdateInput = {
    types?: Maybe<Array<Maybe<PokemonTypeUpdateInput>>>;
    _id_unset?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    uid_unset?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    number_inc?: Maybe<Scalars['Int']>;
    number?: Maybe<Scalars['Int']>;
    number_unset?: Maybe<Scalars['Boolean']>;
    uid?: Maybe<Scalars['String']>;
    types_unset?: Maybe<Scalars['Boolean']>;
    forms?: Maybe<Array<Maybe<PokemonFormUpdateInput>>>;
    forms_unset?: Maybe<Scalars['Boolean']>;
    name_unset?: Maybe<Scalars['Boolean']>;
};
export declare type Query = {
    __typename?: 'Query';
    pokemon?: Maybe<Pokemon>;
    pokemons: Array<Maybe<Pokemon>>;
};
export declare type QueryPokemonArgs = {
    query?: Maybe<PokemonQueryInput>;
};
export declare type QueryPokemonsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<PokemonSortByInput>;
    query?: Maybe<PokemonQueryInput>;
};
export declare type UpdateManyPayload = {
    __typename?: 'UpdateManyPayload';
    matchedCount: Scalars['Int'];
    modifiedCount: Scalars['Int'];
};
