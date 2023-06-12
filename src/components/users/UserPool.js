import { CognitoUserPool } from 'amazon-cognito-identity-js';

const UserPool = {
    UserPoolId: 'us-east-2_IROf0GYaY',
    ClientId: '3513vd8491qokp6r9ca63mc91f',
  };

const data =  new CognitoUserPool(UserPool)

export default data;