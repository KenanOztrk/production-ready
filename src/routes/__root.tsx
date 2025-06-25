import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ textDecoration: 'none', fontWeight: 700 }}>
            Pokédex
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/pokelist">
              Pokelist
            </Button>
            <Button color="inherit" component={Link} to="/favorites">
              Favorites
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4, minHeight: '80vh' }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.100', color: 'grey.700' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Pokédex. Tüm hakları saklıdır.
        </Typography>
      </Box>
      <TanStackRouterDevtools />
    </>
  ),
})