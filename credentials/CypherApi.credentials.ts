import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class CypherApi implements ICredentialType {
	name = 'cypherApi';
	displayName = 'Cypher API';
	documentationUrl = 'https://neo4j.com/docs/bolt/current/';
	properties: INodeProperties[] = [
		{
			displayName: 'Bolt URL',
			name: 'boltUrl',
			type: 'string',
			default: 'bolt://localhost:7687',
			placeholder: 'bolt://localhost:7687',
			description: 'The Bolt URL of the graph database instance',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			description:
				'The username for authentication (leave empty if authentication is disabled)',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'The password for authentication (leave empty if authentication is disabled)',
		},
	];
}
