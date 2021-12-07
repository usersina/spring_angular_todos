package com.sina.app.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // -- NOTE: User entity (api user) IS NOT a LoggedUser entity (security user)

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // -- Allow access to users' profiles publicly
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/users/**").permitAll();

        // -- Allow only admins & LoggedUsers to get the list of todos
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/todos/**").hasAnyAuthority("ADMIN", "USER");

        // -- Allow adding, editing & deleting for admin only
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/todos/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/todos/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/todos/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/users/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/users/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/users/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().anyRequest().authenticated();

        // http.authorizeRequests().anyRequest().permitAll();

        http.addFilterBefore(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
