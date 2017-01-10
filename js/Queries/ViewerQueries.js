import React from 'react'
import Relay from 'react-relay'

const ViewerQueries = {
          respondent: (Component) => Relay.QL`
              query {
                  respondent {
                      ${Component.getFragment('respondent')}
                  }
              }
            `,
          }

export default ViewerQueries;
