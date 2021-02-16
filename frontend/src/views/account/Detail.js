/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
import React from 'react';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';

import Page from 'src/components/Page';
import { useNavigate, useParams } from 'react-router-dom';
import Http from 'src/utils/http';
// import Http from 'src/utils/http';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1
  }
}));

const AccountDetail = props => {
  console.log('props', props);
  const classes = styles();
  const params = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = React.useState({});

  React.useEffect(() => {
    (async () => {
      try {
        if (params.id) {
          const { data } = await Http.get(`/customers/${params.id}`);

          setDetails(data.data);
        }
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [params.id]);
  console.log(details);
  return (
    <Page className={classes.root} title="Accounts Detail">
      <Container maxWidth={false}>
        <Page.Header title="Account Detail" />

        <Container
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '1.5em',
            marginTop: '1em',
            marginBottom: '2em'
          }}
        >
          <Typography variant="h1" style={{ marginBottom: '1em' }}>
            Water Account Overview
          </Typography>

          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Account Name:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.account_name}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                City:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.city}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Contact Number:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.contact_number}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Spouse Name:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.spouse_name}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Birthdate:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.birth_date}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Occupation:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {/* {details.birth_date} */}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Civil Status:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.civil_status === '1' ? 'Married' : 'Single'}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Nearest Neighbor:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.nearest_neighbor}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Block Number:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.block_number}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Ownership Details:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.ownership_details}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Barangay:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.barangay}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                User Count:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.user_count}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: '1.15em', padding: '1em' }}>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Route/Zone:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {details.route}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  fontWeight: 'bold'
                }}
              >
                Type of water service:
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                -
              </div>
            </div>
          </div>

          <Container style={{ marginTop: '1em', textAlign: 'center' }}>
            <Button style={{ width: 150 }} variant="contained" color="primary">
              Next
            </Button>
            &nbsp;
            <Button
              style={{ width: 150 }}
              variant="contained"
              onClick={() => navigate('/accounts')}
            >
              Previous Page
            </Button>
          </Container>
        </Container>
      </Container>
    </Page>
  );
};

export default AccountDetail;
