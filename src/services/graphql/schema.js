import { GraphQLScalarType } from 'graphql/type';

const Date = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return value;
  },
});



const typeDefinitions = `
  scalar Date

  type Respondent {
      _id: String!
      loginCode: String
      firstName: String
      lastName: String
      address1: String
      address2: String
      zip: String
      city: String
      longitude: String
      latitude: String
      email: String
      telephone1: String
      telephone2: String
      householdId: Int
      householdOrder: Int
      householdHead: Int
      status: Int
      remarks: [Remarks]
      contacts: [Contacts]
      info: String
      puid: Int
      selected: Boolean
      present: Boolean
      financial: Boolean
      family: Boolean
      coverscreen: Boolean
      sex: Int
      age: Int
      birthdate: String
  }

  type Remarks {
      _id: String!
      date: Date
      message: String
  }

  type Contacts {
     date: Date
     refusal: Boolean
     finalCode: Boolean
  }


  type Survey {
    _id: String!
    name: String
    description: String
    type: [SurveyType]
    group: [SurveyGroup]
    section: [SurveySection]
    title: String
  }

  type SurveySection {
      _id: String!
      parent: String
      name: String
      description: String
      hidden: Boolean
  }

  type SurveyGroup {
    _id : String!
    name: String!
    parent: [SurveyGroup]
    type: String
  }

  type SurveyType {
    _id : String
    name: String
    description: String
    answerType: String
  }

  type Question {
    _id: String
    answer: String
 }


  type RootQuery {
    viewer: Respondent
  }

  type AuthPayload {
    token: String # JSON Web Token
    data: Respondent
  }

  type RootMutation {
    logIn(username: String!
          password: String!
        ): AuthPayload
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
  `;


  export default [typeDefinitions];
